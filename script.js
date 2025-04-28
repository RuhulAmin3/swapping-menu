function swappingElements() {
    // select parent of the replaceable elements
    const parent = document.querySelector("nav").children[0].children[2].children[0];

    // select all element and store on variable;
    const learn = parent.children[0];

    const reference = parent.children[1];
    const community = parent.children[2];
    const blog = parent.children[3];

    // replace children by swapping reference and community 
    parent.replaceChildren(learn, community, reference, blog);
}

swappingElements();