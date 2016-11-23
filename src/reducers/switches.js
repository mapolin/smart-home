const switch_button = (state = {}, action) => {
  switch (action.type) {
    case 'TURN_ON':
      return {
        id: action.id,
        isOn: true
      };
    case 'TURN_OFF':
      return {
        id: action.id,
        isOn: false
      };
    default:
      return state
  }
}

const switches = (state = [], action) => {
  switch (action.type) {
    case 'TURN_ON':
      return [
        ...state,
        switch_button(true, action)
      ]
    case 'TURN_OFF':
      return [
        ...state,
        switch_button(false, action)
      ]
    default:
      return state
  }
}

export default switches