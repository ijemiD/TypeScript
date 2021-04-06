type RenderWithRouter = (
  renderComponent: () => Reract.ReactNode,
  route? : string
) => RenderResult & { history : MemoryHistory }


declare global {
 namespace NodeJS {
  interface Global {
     renderWithRouter: RenderWithRouter
  }
 }
 
 namespace globalThis { // standard way for accessing the global object
    const renderWithRouter: RenderWithRouter 
 }

global.renderWithRouter = (renderComponent, history) => {
	const history = createMemoryHistory();
	if (route) {
		history.push(route);
	}	
}


// to use
renderWithRouter(() => <SomeRouteComponent />,'/someroute');
