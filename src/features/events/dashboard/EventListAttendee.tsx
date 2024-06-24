import {Image, List} from "semantic-ui-react";
import {AppAttendee} from "../../../app/types/event.ts";

interface Props {
    attendee: AppAttendee
}

export default function EventListAttendee ({attendee}: Props) {
    return (
        <List.Item>
            <Image size="mini" circular src={attendee.photoUrl}/>
        </List.Item>
    )
}