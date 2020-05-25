using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace ReactCandidates.Data
{
    public class CandidateContext : DbContext
    {
        private readonly string _connectionString;

        public CandidateContext(string conn)
        {
            _connectionString = conn;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Candidate> Candidates { get; set; }
    }
}
