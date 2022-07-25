package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/timestamppb"

	pp "github.com/slimcdk/slimcdk/backend/internal/pingpong"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

// server is used to implement helloworld.GreeterServer.
type server struct {
	pp.UnimplementedGameServer
}

// SayHello implements helloworld.GreeterServer
func (s *server) SayPong(ctx context.Context, in *pp.Ping) (*pp.Pong, error) {
	log.Printf("Received ping: %v", in.GetTimestamp())
	return &pp.Pong{Timestamp: timestamppb.Now()}, nil
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pp.RegisterGameServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
