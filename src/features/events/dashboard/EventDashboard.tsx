import {Grid} from "semantic-ui-react";
import EventList from "./EventList.tsx";
import EventForm from "../form/eventForm.tsx";
import {sampleData} from "../../../app/api/sampleData.ts";
import {AppEvent} from "../../../app/types/event.ts";
import {useEffect, useState} from "react";

interface Props {
    formOpen: boolean;
    setFormOpen: (value: boolean) => void;
}

export default function EventDashboard({formOpen, setFormOpen}: Props) {
    const [events, setEvents] = useState<AppEvent[]>([]);

    useEffect(() => {
        setEvents(sampleData);
    }, []);

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && 
                    <EventForm setFormOpen={setFormOpen}/> }
            </Grid.Column>
        </Grid>
    )
}