export function formatDate(date_obj): string {

    const options = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};

    if (date_obj != null) {
        const date_ms = Date.parse(date_obj.toString());
        if (date_ms) {
            const date_obj_new = new Date();
            date_obj_new.setTime(date_ms);
            return date_obj_new.toLocaleDateString('en-US', options);
        }// if
    } else {
        return 'Unknown date';
    }// if

}// formatDate
