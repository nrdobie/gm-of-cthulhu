export function TableOfContents() {
  return (
    <div>
      <ul className="sticky top-8 [&_li>ul]:ml-4">
        <li>
          <EventLink hash="top">Back to Top</EventLink>
        </li>
        <li>
          <EventLink hash="event-one">Event One</EventLink>
          <ul>
            <li>
              <EventLink hash="event-one-catalysts-person">Person</EventLink>
            </li>
            <li>
              <EventLink hash="event-one-catalysts-place">Place</EventLink>
            </li>
            <li>
              <EventLink hash="event-one-catalysts-thing">Thing</EventLink>
            </li>
            <li>
              <EventLink hash="event-one-catalysts-foe">Foe</EventLink>
            </li>
          </ul>
        </li>
        <li>
          <EventLink hash="event-two">Event Two</EventLink>
          <ul>
            <li>
              <EventLink hash="event-two-catalysts-person">Person</EventLink>
            </li>
            <li>
              <EventLink hash="event-two-catalysts-place">Place</EventLink>
            </li>
            <li>
              <EventLink hash="event-two-catalysts-thing">Thing</EventLink>
            </li>
            <li>
              <EventLink hash="event-two-catalysts-foe">Foe</EventLink>
            </li>
          </ul>
        </li>
        <li>
          <EventLink hash="event-three">Event Three</EventLink>
          <ul>
            <li>
              <EventLink hash="event-three-catalysts-person">Person</EventLink>
            </li>
            <li>
              <EventLink hash="event-three-catalysts-place">Place</EventLink>
            </li>
            <li>
              <EventLink hash="event-three-catalysts-thing">Thing</EventLink>
            </li>
            <li>
              <EventLink hash="event-three-catalysts-foe">Foe</EventLink>
            </li>
          </ul>
        </li>
        <li>
          <EventLink hash="event-four">Event Four</EventLink>
          <ul>
            <li>
              <EventLink hash="event-four-catalysts-person">Person</EventLink>
            </li>
            <li>
              <EventLink hash="event-four-catalysts-place">Place</EventLink>
            </li>
            <li>
              <EventLink hash="event-four-catalysts-thing">Thing</EventLink>
            </li>
            <li>
              <EventLink hash="event-four-catalysts-foe">Foe</EventLink>
            </li>
          </ul>
        </li>
        <li>
          <EventLink hash="rise-of-the-great-old-one">Rise of the Great Old One</EventLink>
          <ul>
            <li>
              <EventLink hash="rise-of-the-great-old-one-catalysts-person">Person</EventLink>
            </li>
            <li>
              <EventLink hash="rise-of-the-great-old-one-catalysts-place">Place</EventLink>
            </li>
            <li>
              <EventLink hash="rise-of-the-great-old-one-catalysts-thing">Thing</EventLink>
            </li>
            <li>
              <EventLink hash="rise-of-the-great-old-one-catalysts-foe">Foe</EventLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

function EventLink({ hash, children }: { hash: string; children: React.ReactNode }) {
  return (
    <a href={`#${hash}`} className="text-primary hover:underline">
      {children}
    </a>
  );
}
