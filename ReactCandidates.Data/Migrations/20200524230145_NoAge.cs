using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactCandidates.Data.Migrations
{
    public partial class NoAge : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Candidates");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Candidates",
                nullable: false,
                defaultValue: 0);
        }
    }
}
