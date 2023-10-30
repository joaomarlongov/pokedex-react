import { Container, Skeleton } from "@mui/material"

export const Skeletons = () => {
    return(

        <>
            <Container maxWidth="false">
                
                <Skeleton variant="rounded" width="100%" height="140px" sx={{marginBottom:"20px", marginTop:"20px"}}/>
                <Skeleton variant="rounded" width="100%" height="140px" sx={{marginBottom:"20px"}}/>
                <Skeleton variant="rounded" width="100%" height="140px" sx={{marginBottom:"20px"}}/>
            </Container>
        </>
    )
    
}