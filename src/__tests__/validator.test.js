'use strict';
const validatorMiddleware = require('../middlewares/validator');

describe('valdidator', () => {
    let consoleSpy;
    const req = {
      query: {},
    };
    const res = {};
    const next = jest.fn();
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  it('check', () => {
    validatorMiddleware(req, res, next);
    //adding query in order to make sure it  defined 
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('moves to the next middleware', () => {
  // initial query value    
  req.query.name="  ";
    validatorMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});