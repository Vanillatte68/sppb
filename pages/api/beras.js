

export function handler (req, res) {
    const url = "http://localhost:8080/api/beras";
    const {method} = req;

    switch (method) {
        case "GET" :
            res.status(200).json(todos);
            break;
        case "POST" :
            const {url, completed} = req.body;
            url.push ({
                id: url.length + 1,
                url,
                completed,
            });
            res.status(200).json(url);
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}