function Entry() {
    return (
        <h3 className="entry">an entry</h3>
    );
}

export default function EntryList() {
    return (
        <div>
            <h1>my entries:</h1>
            <Entry />
            <Entry />
            <Entry />
        </div>
    );
}