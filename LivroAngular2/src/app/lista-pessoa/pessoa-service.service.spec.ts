import { TestBed, inject } from '@angular/core/testing';

import { PessoaServiceService } from './pessoa-service.service';

describe('PessoaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PessoaServiceService]
    });
  });

  it('should ...', inject([PessoaServiceService], (service: PessoaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
