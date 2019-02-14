
(() => {
    const HANDLE_EVENT = "app.record.create.show";
    interface KintoneEvent {
        record: kintone.types.SavedFields;
    }
    kintone.events.on(HANDLE_EVENT, (event: KintoneEvent) => {
        event.record.Number.value = "1";
        event.record.Table.value[0].value.Number_Table.value = "1";
    });
})();
