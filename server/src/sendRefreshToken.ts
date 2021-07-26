import  {Response} from 'express'

export const sendRefreshToken = (res: Response, token: String) => {
    res.cookie("jid", token, {
        httpOnly: true,  //can't be accessed by javascript through XSS attack
    }); 
}