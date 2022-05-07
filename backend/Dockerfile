# Cache dependencies
FROM golang:1.18 as build-deps
WORKDIR /src
ADD go.mod .
ADD go.sum .
RUN go mod download -x


# Build binary
FROM build-deps as build-env
COPY . .
RUN CGO_ENABLED=0 go build -ldflags "-s -w" -v -o /builds/main /src/cmd/*


# Generate TLS certificates
FROM alpine:3.8 as alpine
RUN apk add -U --no-cache ca-certificates
COPY --from=build-env /builds /usr/local/bin


# Final container
FROM scratch
COPY --from=build-env /builds /usr/local/bin
COPY --from=alpine /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
EXPOSE 3000
ENV GIN_MODE=release
CMD ["/usr/local/bin/main"]