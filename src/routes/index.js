const { Router } = require('express');
const router = Router();

router.get('/test',(req, res) => {
    const data = {
        "name": "Ana Maria Mongui",
        "website": "https://anamongui.github.io/Pagina-HTML.github.io/"
    }
    res.json(data)
   });

module.exports = router;