package domain

type EventRepository interface {
	ListEvents() ([]*Event, error)
	FindEventByID() (*Event, error)
	FindSpotsByEventID(eventID string) ([]*Spot, error)
	FindSpotByName(eventID string, spotName string) (*Spot, error)
	// CreateEvent(event *Event) error
	// CreateSpot(spot *Spot) error
	// CreateTicket(ticket *Ticket) error
	ReserveSpot(spotID, ticketID string) error
}
