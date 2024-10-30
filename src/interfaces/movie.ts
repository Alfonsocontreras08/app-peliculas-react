export interface IMovie {
  name: string
  description: string
  thumbnail: string
}

export interface IItem extends Omit<IMovie,'thumbnail'> {
  thumbnail: {
    path: string,
    extension: string
  }
}