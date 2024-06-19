package usecase

import "github.com/rodolfoHOk/fullcycle.imersao18/sales-api/internal/events/domain"

type ListSpotsInputDTO struct {
	EventID string
}

type ListSpotsOutputDTO struct {
	Event EventDTO  `json:"event"`
	Spots []SpotDTO `json:"spots"`
}

type ListSpotsUseCase struct {
	repo domain.EventRepository
}

func NewListSpotsUseCase(repo domain.EventRepository) *ListSpotsUseCase {
	return &ListSpotsUseCase{
		repo: repo,
	}
}

func (uc *ListSpotsUseCase) Execute(input ListSpotsInputDTO) (*ListSpotsOutputDTO, error) {
	event, err := uc.repo.FindEventByID(input.EventID)
	if err != nil {
		return nil, err
	}

	spots, err := uc.repo.FindSpotsByEventID(input.EventID)
	if err != nil {
		return nil, err
	}

	spotsDTO := make([]SpotDTO, len(spots))
	for i, spot := range spots {
		spotsDTO[i] = SpotDTO{
			ID:       spot.ID,
			EventID:  spot.EventID,
			Name:     spot.Name,
			Status:   string(spot.Status),
			TicketID: spot.TicketID,
		}
	}

	eventDTO := EventDTO{
		ID:           event.ID,
		Name:         event.Name,
		Location:     event.Location,
		Organization: event.Organization,
		Rating:       string(event.Rating),
		Date:         event.Date.Format("2024-06-19 12:34:56"),
		ImageUrl:     event.ImageURL,
		Capacity:     event.Capacity,
		Price:        event.Price,
		PartnerID:    event.PartnerID,
	}

	return &ListSpotsOutputDTO{
		Event: eventDTO,
		Spots: spotsDTO,
	}, nil
}
