export const turnOn = (id) => {
  return {
    type: 'turnOn',
    id
  }
}

export const turnOff = (id) => {
  return {
    type: 'turnOff',
    id
  }
}