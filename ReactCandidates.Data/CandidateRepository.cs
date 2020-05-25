using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace ReactCandidates.Data
{
    public class CandidateRepository
    {
        private readonly string _connectionString;
        public CandidateRepository(string conn)
        {
            _connectionString = conn;
        }
        public List<Candidate> GetAll(string status)
        {
            using (var cxt = new CandidateContext(_connectionString))
            {
                return cxt.Candidates.Where(c => c.Status == status).ToList();
            }
        }
        public Candidate GetById(int id)
        {
            using (var cxt = new CandidateContext(_connectionString))
            {
                return cxt.Candidates.FirstOrDefault(c => c.Id == id);
            }
        }
        public void AddCandidate(Candidate candidate)
        {
            using (var cxt = new CandidateContext(_connectionString))
            {
                cxt.Candidates.Add(candidate);
                cxt.SaveChanges();
            }
        }
        public void ChangeCandidateStatus(Candidate candidate)
        {
            using (var cxt = new CandidateContext(_connectionString))
            {
                cxt.Candidates.Attach(candidate);
                cxt.Entry(candidate).State = EntityState.Modified;
                cxt.SaveChanges();
            }
        }
        public CandidateCount GetCandidateCounts()
        {
            using (var cxt = new CandidateContext(_connectionString))
            {
                return new CandidateCount
                {
                    PendingCount = cxt.Candidates.Where(c => c.Status == "pending").Count(),
                    DeclinedCount = cxt.Candidates.Where(c => c.Status == "declined").Count(),
                    ConfirmedCount = cxt.Candidates.Where(c => c.Status == "confirmed").Count()
                };
            }
        }


    }
}
