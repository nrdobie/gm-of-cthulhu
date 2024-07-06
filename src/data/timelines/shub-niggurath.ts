import { TimelineCatalystType, TimelineEvent, TimelineRating } from "~/stores/timeline";
import type { State } from "~/stores/use-timeline-store";

export const shubNiggurathTimeline: State = {
  greatOldOneName: "Shub-Niggurath",
  activeEvent: null,
  events: {
    [TimelineEvent.EventOne]: {
      completed: false,
      name: "Cash on Delivery",
      aspect: "Cults and Creeps are Seeking the Necronomicon",
      catalysts: {
        [TimelineCatalystType.Person]: {
          rating: TimelineRating.Negative,
          publicAspect: "Jürgen Sauer, leader of the Sin-Slayers",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Place]: {
          rating: TimelineRating.Neutral,
          publicAspect: "Alexanderplatz Station in Berlin",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Thing]: {
          rating: TimelineRating.Negative,
          publicAspect: "The Necronomicon",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Foe]: {
          rating: TimelineRating.Neutral,
          publicAspect: "???",
          privateAspect: "Several cults are working at cross purposes",
          showPrivateAspect: false,
        },
      },
    },
    [TimelineEvent.EventTwo]: {
      name: "Dry Run on Bald Mountain",
      aspect: "Shub-Niggurath's Children Are Willing to Deal",
      completed: false,
      catalysts: {
        [TimelineCatalystType.Person]: {
          rating: TimelineRating.Negative,
          publicAspect: "???",
          privateAspect: "Tiolk'thu, servitor of Shub-Niggurath",
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Place]: {
          rating: TimelineRating.Neutral,
          publicAspect: "The peak of Brocken",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Thing]: {
          rating: TimelineRating.Neutral,
          publicAspect: "A summoning circle",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Foe]: {
          rating: TimelineRating.Neutral,
          publicAspect: "A group of cultists",
          privateAspect: "…led by Jürgen Sauer",
          showPrivateAspect: false,
        },
      },
    },
    [TimelineEvent.EventThree]: {
      name: "The Thousand Young",
      aspect: "Shub-Niggurath's Children Are Waiting for Their Chance",
      completed: false,
      catalysts: {
        [TimelineCatalystType.Person]: {
          rating: TimelineRating.Neutral,
          publicAspect: "???",
          privateAspect: "An unusually rattled and underprepared Jürgen Sauer",
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Place]: {
          rating: TimelineRating.Neutral,
          publicAspect: "A small police station in Friedrichshain",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Thing]: {
          rating: TimelineRating.Negative,
          publicAspect: "A human corpse, puppeteered by Aiüvhyllatl",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Foe]: {
          rating: TimelineRating.Negative,
          publicAspect: "A chaotic mélange of cultists, cops, and horrible monsters",
          privateAspect: null,
          showPrivateAspect: false,
        },
      },
    },
    [TimelineEvent.EventFour]: {
      name: "A Most Exclusive Club",
      aspect: "The Walls Between Dimensions Are Thin",
      completed: false,
      catalysts: {
        [TimelineCatalystType.Person]: {
          rating: TimelineRating.Neutral,
          publicAspect: "Dr. Henry Armitage",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Place]: {
          rating: TimelineRating.Negative,
          publicAspect: "Miskatonic Polytechnic",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Thing]: {
          rating: TimelineRating.Neutral,
          publicAspect: "Particle accelerator",
          privateAspect: "…and trans-dimensional bridge",
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Foe]: {
          rating: TimelineRating.Negative,
          publicAspect: "???",
          privateAspect: "Things from the other side, desperate and furious",
          showPrivateAspect: false,
        },
      },
    },
    [TimelineEvent.RiseOfTheGreatOldOne]: {
      name: "The Rise of the Great Old One",
      aspect: "Summoning Plans Have Already Been Set in Motion",
      completed: false,
      catalysts: {
        [TimelineCatalystType.Person]: {
          rating: TimelineRating.Negative,
          publicAspect: "Shub-Niggurath, the Black Goat of the Woods with a Thousand Young",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Place]: {
          rating: TimelineRating.Negative,
          publicAspect: "Brocken, at the height of Walpurgisnacht",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Thing]: {
          rating: TimelineRating.Negative,
          publicAspect: "The Necronomicon",
          privateAspect: null,
          showPrivateAspect: false,
        },
        [TimelineCatalystType.Foe]: {
          rating: TimelineRating.Negative,
          publicAspect: "Shub-Niggurath’s multitudinous and self-propagating spawn",
          privateAspect: null,
          showPrivateAspect: false,
        },
      },
    },
  },
};
