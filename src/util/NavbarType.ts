import React from "react";

type Ref = React.RefObject<HTMLDivElement>;

export interface NavRefProps {
     aboutRef: Ref;
     testimonialRef: Ref;
     teamRef: Ref;
     contactUsRef: Ref;
     heroRef: Ref;
     serviceRef: Ref;
}
