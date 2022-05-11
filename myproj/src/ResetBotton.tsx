import React from "react";


export const ResetBotton = ({ reset }: { reset: () => void }) => {
  return <button type="button"
    onClick={reset}
  >
    Reset
  </button>;
}