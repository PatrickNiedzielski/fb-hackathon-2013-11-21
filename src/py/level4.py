# Learn Python -- level 2 logic
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

player1._position = [2, 2];
player2._position = [14, 6];

walls = [Wall([4,0]), Wall([4,1]), Wall([4,2]), Wall([4,3]), Wall([4,4]),
         Wall([0,4]), Wall([1,4]), Wall([2,4]), Wall([3,4])];

signs = [Sign([1, 1], 4883),
         Sign([3, 3], 2),
         Sign([15, 9], 558),
         Sign([1, 7], 24)];

def at_end():
    if (player1._messages.count("1") < 1 or
        player2._messages.count("1") < 1):
        raise Exception("Failure")
    
        
