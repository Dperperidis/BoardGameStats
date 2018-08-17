using BGS.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BGS.Data
{
    public class SqlContext : DbContext
    {
        public SqlContext(DbContextOptions<SqlContext> options) : base (options) { }

        public DbSet<Value> Values { get; set; }
        public DbSet<Player> Players { get; set; }
    }
}
