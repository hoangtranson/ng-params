import PARAMS from '../src';

describe('Ng Params Pass Cases', () => {
  let windowSpy: any;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, "window", "get");
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });


  test('first case', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        search: "?so_medium=StackOverflow&so_source=SiteNav"
      }
    }));
    const _url = new PARAMS();
    expect(_url.queries.so_medium).toBe('StackOverflow');
  });
})