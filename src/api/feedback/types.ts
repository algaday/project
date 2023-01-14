export type UserFeedbacks = {
  login: { uuid: string }
  picture: { medium: string }
  name: {
    first: string
    last: string
  }
  email: string
  registered: { date: string }
}

export type UserData = {
  results: UserFeedbacks[]
}
