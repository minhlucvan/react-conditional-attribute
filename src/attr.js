function attr(...statements) {
    let length = statements.length,
        val = '';

    for (let i = 0; i < length; i++) {
        let statement = statements[0];

        if (statement.if) {
            val = statement.val;
            break;
        } else {
            if (statement.hasOwnProperty('else')) {
                val = statement.else;
            } else {
                val = statements[length - 1].else;
            }

            break;
        }
    }

    return val;
}

export default attr;