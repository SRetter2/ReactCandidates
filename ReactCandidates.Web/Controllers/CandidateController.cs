using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactCandidates.Data;

namespace ReactCandidates.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _connectionString;
        public CandidateController(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getall")]
        public List<Candidate> GetAll(string status)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetAll(status);
        }
        [HttpGet]
        [Route("getcandidate")]
        public Candidate GetById(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetById(id);
        }
        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.AddCandidate(candidate);
        }
        [HttpPost]
        [Route("changestatus")]
        public void ChangeCandidateStatus(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.ChangeCandidateStatus(candidate);
        }
        [HttpGet]
        [Route("getcandidatecount")]
        public CandidateCount GetCandidateCount()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidateCounts();
        }
    }
}