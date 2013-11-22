# Learn Python -- level 14 logic
# Copyright (C) 2013 Cornell FB Hackathon Team.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

player1._position = [0, 10];
player1._dropWall = True
_world.grid[player1._position[1]][player1._position[0]] = player1
player2._position = [18, 0];
player2._dropWall = True
_world.grid[player2._position[1]][player2._position[0]] = player2

walls = []
for i in range(7, 11):
    walls.append(Wall([1, i]));
for i in range(2, 4):
    walls.append(Wall([i, 2]));
for i in range(3, 5):
    walls.append(Wall([i, 9]));
for i in range(2, 4):
    walls.append(Wall([10, i]));
for i in range(8, 10):
    walls.append(Wall([i, 7]));
for i in range(8, 10):
    walls.append(Wall([i, 8]));
for i in range(11, 15):
    walls.append(Wall([i, 6]));
for i in range(11, 15):
    walls.append(Wall([i, 7]));
for i in range(0, 4):
    walls.append(Wall([17, i]));

objects = [Item("Mushroom", [1, 1]),
           Item("Mushroom", [4, 3]),
           Item("Mushroom", [4, 5]),
           Item("Mushroom", [6, 8]),
           Item("Mushroom", [8, 3]),
           Item("Mushroom", [9, 1]),
           Item("Mushroom", [13, 3]),
           Item("Mushroom", [15, 7]),
           Item("Bread", [3, 3]),
           Item("Bread", [4, 8]),
           Item("Bread", [9, 2]),
           Item("Bread", [11, 2]),
           Item("Bread", [13, 4]),
           Item("Bread", [16, 0]),
           Item("Bread", [17, 4])];

def at_end():
    for i in range(0,19):
        for j in range(0, 11):
            if (not instanceof(_world.grid[i][j], Wall) and \
                not instanceof(_world.grid[i][j], Player)):
                raise Exception("Failure.  Ha.")
