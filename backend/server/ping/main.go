package main

import (
	"context"
	"flag"
	"log"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/types/known/timestamppb"

	pp "github.com/slimcdk/slimcdk/backend/internal/pingpong"
)

func main() {
	flag.Parse()
	// Set up a connection to the server.
	conn, err := grpc.Dial("127.0.0.1:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	c := pp.NewGameClient(conn)

	// Contact the server and print out its response.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*2)
	defer cancel()

	now := time.Now()

	r, err := c.SayPong(ctx, &pp.Ping{Timestamp: timestamppb.New(now)})
	if err != nil {
		log.Fatalf("could not greet: %v", err)
	}

	log.Printf("Received pong after %v", time.Since(r.GetTimestamp().AsTime()))
}
