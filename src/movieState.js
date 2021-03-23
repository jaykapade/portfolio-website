//Import Images
import athlete from "./img/cardio.png";
import goodtimes from "./img/yoga.png";
import theracer from "./img/weights.png";
import athlete2 from "./img/cardio2.png";
import goodtimes2 from "./img/yoga2.png";
import theracer2 from "./img/weights2.png";

export const MovieState = () => {
  return [
    {
      title: "Cardio: Turn Fat into FIT!",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/cardio",
      awards: [
        {
          title: "The Best Routine Ever!",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a Health",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Yoga: Revive your spirit",
      mainImg: goodtimes,
      url: "/work/yoga",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "The Best Routine Ever!",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a Health",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Weights: No Pain, No Gains",
      mainImg: theracer,
      url: "/work/weights",
      secondaryImg: theracer2,
      awards: [
        {
          title: "The Best Routine Ever!",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a Health",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
