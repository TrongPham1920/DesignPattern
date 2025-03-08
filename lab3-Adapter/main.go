package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println()
	a1 := "10"
	a(a1)

	a2, err := strconv.Atoi(a1)
	if err != nil {
		fmt.Println("Lỗi:", err)
		return
	}

	b(a2)

}

func a(info string) {
	fmt.Println(info)

}

func b(info int) {
	fmt.Println(info)
}
