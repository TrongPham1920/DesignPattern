package main

import "fmt"

type Notifier interface {
	Send(mess string)
}

type EmailNotifier struct{}

func (EmailNotifier) Send(mess string) {
	fmt.Printf("Sending message: %s (Sender: Email)", mess)
}

type SMSNotifier struct{}

func (SMSNotifier) Send(mess string) {
	fmt.Printf("Sending message: %s (Sender: SMS)", mess)
}

type NotificationService1 struct {
	notifier Notifier
}

func (s NotificationService1) SendNotification(message string) {
	s.notifier.Send(message)
}

func main() {
	s := NotificationService1{
		notifier: SMSNotifier{},
	}

	a := NotificationService1{
		notifier: EmailNotifier{},
	}

	s.SendNotification("Hello bae")
	a.SendNotification("Hello bae2")
}
