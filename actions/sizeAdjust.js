export const BLOAT = "BLOAT"
export const SHRINK = "SHRINK"

let bloat = () => {
  return {
    type: BLOAT
  }
}

let shrink = () => {
  return {
    type: SHRINK
  }
}

export { bloat, shrink };
