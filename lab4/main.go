package main

import "fmt"

type NotificationService struct {
	notifierType string
}

func (s *NotificationService) SendNotification(mess string) {
	if s.notifierType == "email" {
		fmt.Printf("Sending message: %s (Sender: Email)\n", mess)
	} else if s.notifierType == "sms" {
		fmt.Printf("Sending message: %s (Sender: SMS)\n", mess)
	}
}

// func main() {
// 	s := NotificationService{notifierType: "email"}
// 	s.SendNotification("Hello world")
// }
