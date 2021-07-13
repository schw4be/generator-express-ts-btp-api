// Import Router Object
import { Router } from "@awaitjs/express";
import authRouter from "./auth";

// Create a Router
const router = Router();
// Handle Routes
<% if(authentication){ -%>
    router.use(authRouter);
<% } else { -%>
    // Needed for Authentication!
    // router.use(authRouter); 
<% } -%>

router.get("/", (req, res) => {
    res.json({
        message: "👋🦄🌎✨",
    });
});

// Expose the Router Object
export default router;
