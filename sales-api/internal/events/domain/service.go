package domain

import (
	"errors"
	"fmt"
)

var (
	ErrQuantityPositive = errors.New("quantity must be greater than 0")
)

type SpotService struct{}

func NewSpotService() *SpotService {
	return &SpotService{}
}

func (s *SpotService) GenerateSpots(event *Event, quantity int) error {
	if quantity <= 0 {
		return ErrQuantityPositive
	}
	for i := range quantity {
		spotName := fmt.Sprintf("%c%d", 'A'+i/10, i%10+1)
		spot, err := NewSpot(event, spotName)
		if err != nil {
			return err
		}
		event.Spots = append(event.Spots, *spot)
	}
	return nil
}
