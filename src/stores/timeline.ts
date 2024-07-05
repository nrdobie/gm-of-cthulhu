export enum TimelineRating {
  Plus = "plus",
  Neutral = "neutral",
  Negative = "negative",
}

export enum TimelineEvent {
  EventOne = "event-one",
  EventTwo = "event-two",
  EventThree = "event-three",
  EventFour = "event-four",
  RiseOfTheGreatOldOne = "rise-of-the-great-old-one",
}

export enum TimelineCatalystType {
  Person = "person",
  Place = "place",
  Thing = "thing",
  Foe = "foe",
}

export type TimelineCatalyst = {
  rating: TimelineRating;
  publicAspect: string;
  privateAspect: string | null;
  showPrivateAspect: boolean;
};

export type TimelineEventData = {
  name: string;
  aspect: string;
  catalysts: Record<TimelineCatalystType, TimelineCatalyst>;
  completed: boolean;
};
