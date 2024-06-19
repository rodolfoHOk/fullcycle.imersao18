package usecase

import "github.com/rodolfoHOk/fullcycle.imersao18/sales-api/internal/events/domain"

type GetEventInputDTO struct {
	ID string
}

type GetEventOutputDTO struct {
	ID           string  `json:"id"`
	Name         string  `json:"name"`
	Location     string  `json:"location"`
	Organization string  `json:"organization"`
	Rating       string  `json:"rating"`
	Date         string  `json:"date"`
	ImageUrl     string  `json:"image_url"`
	Capacity     int     `json:"capacity"`
	Price        float64 `json:"price"`
	PartnerID    int     `json:"partner_id"`
}

type GetEventUseCase struct {
	repo domain.EventRepository
}

func NewGetEventUseCase(repo domain.EventRepository) *GetEventUseCase {
	return &GetEventUseCase{
		repo: repo,
	}
}

func (uc *GetEventUseCase) Execute(input GetEventInputDTO) (*GetEventOutputDTO, error) {
	event, err := uc.repo.FindEventByID(input.ID)
	if err != nil {
		return nil, err
	}

	return &GetEventOutputDTO{
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
	}, nil
}
