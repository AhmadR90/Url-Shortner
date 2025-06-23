import shortid from "shortid";
import { Url } from "../Models/Url.js"

export const shortUrl = (req, res) => {
    const longUrl  = req.body.url;
    const shortCode = shortid.generate();
    const shortUrl = `http://localhost:3000/${shortCode}`;

    const newUrl=new Url({
        shortCode: shortCode,
        longUrl: longUrl
    });

    newUrl.save().then(() => {
      
      
        res.render("index.ejs", {shortUrl });
    }).catch(err => {
        console.error('Error saving URL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
}
export const redirectUrl = (req, res) => {
    const shortCode = req.params.shortCode;
    Url.findOne({ shortCode }).then(url => {
        if (url) {
            res.redirect(url.longUrl);
        } else {
            res.status(404).send('URL not found');
        }
    }).catch(err => {
        console.error('Error finding URL:', err);
        res.status(500).send('Internal Server Error');
    });
}
