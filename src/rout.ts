const express = require('express');

import prisma from './prisma';


const router = express.Router();

router.get('/', async (req:any, res:any) => {
    // // const { email, name, password } = req.body;


    try {
        const user = await prisma.user.findFirst({
            where: {
                email:"dev@gmail.com",
            },
        });

        res.status(201).json({ message: 'User Find successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error finding user' });
    }
});

export default router;
