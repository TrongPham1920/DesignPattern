package main

import (
	"fmt"
	facade "lab3-facade/facede"
	"log"
)

func main() {
	fmt.Println()
	walletFacade := facade.NewWalletFacade("abc", 1234)
	fmt.Println()

	err := walletFacade.AddMoneyToWallet("abc", 1234, 10)
	if err != nil {
		log.Fatalf("Error: %s\n", err.Error())
	}

	fmt.Println()
	err = walletFacade.DeductMoneyFromWallet("abc", 1234, 5)
	if err != nil {
		log.Fatalf("Error: %s\n", err.Error())
	}
}
