package repository

type User struct {
	UserName string
	Email    string
	Password string
}

func (u *User) Save() error {

	return nil
}
