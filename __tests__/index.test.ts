import PARAMS from '../src';

describe('Ng Params Pass Cases', () => {
  let windowSpy: any;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, "window", "get");
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });


  test('get queries', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        search: "?so_medium=StackOverflow&so_source=SiteNav"
      }
    }));
    const _url = new PARAMS();
    expect(_url.queries.so_medium).toBe('StackOverflow');
  });

  test.only('pick', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        search: "?so_medium=StackOverflow&so_source=SiteNav"
      }
    }));
    const _url = new PARAMS();
    const result = _url.pick(['so_source'])
    expect(result.so_source).toBe('SiteNav');
  });
})