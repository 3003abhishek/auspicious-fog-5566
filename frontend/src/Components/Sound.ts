import clickSound from "../Asset/sound/click.mp3";

import error from "../Asset/sound/error.mp3";

export let playSound = (condition: boolean) => {
  if (condition) {
    new Audio(clickSound).play();
  } else {
    new Audio(clickSound).pause();
  }
};

export let errorSound = (condition: boolean) => {
  if (condition) {
    new Audio(error).play();
  } else {
    new Audio(error).pause();
  }
};
