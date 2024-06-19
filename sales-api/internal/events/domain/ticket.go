package domain

import "errors"

type TicketType string

const (
	TicketTypeFull TicketType = "full"
	TicketTypeHalf TicketType = "half"
)

var (
	ErrTicketPricePositive = errors.New("ticket price must be greater than zero")
)

type Ticket struct {
	ID         string
	EventID    string
	Spot       *Spot
	TicketType TicketType
	Price      float64
}

func IsValidTicketType(ticketType string) bool {
	return ticketType == string(TicketTypeFull) || ticketType == string(TicketTypeHalf)
}

func (t *Ticket) CalculatePrice() {
	if t.TicketType == TicketTypeHalf {
		t.Price /= 2
	}
}

func (t *Ticket) Validate() error {
	if t.Price <= 0 {
		return ErrTicketPricePositive
	}
	return nil
}
