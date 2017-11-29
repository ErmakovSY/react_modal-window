export const toggleMogal = (show) => {
  // Return action
  return {
    // Unique identifier
    type: 'TOGGLE_MODAL_WINDOW',
    // Payload
    show: show
  }
};