using Microsoft.EntityFrameworkCore.Migrations;

namespace BGS.Migrations
{
    public partial class AddFirstlast : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "Players",
                newName: "LastName");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Players",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Players");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Players",
                newName: "FullName");
        }
    }
}
