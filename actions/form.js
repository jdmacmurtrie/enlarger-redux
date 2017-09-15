export const CLEAR_FORM = "CLEAR_FORM"
export const SUBMIT_FORM = "SUBMIT_FORM"


let clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}

let submitForm = () => {
  return {
    type: SUBMIT_FORM,
    formPayload
  }
}

export { clearForm, submitForm };
