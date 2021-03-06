using System;
using NServiceBus;

namespace Reservations.Sagas
{
	public class ReservationSagaData : ContainSagaData
	{
		public virtual string ReservationUuid { get; set; }
		public virtual int RoomTypeId { get; set; }
		public virtual bool IsReservationSubmitted { get; set; }
		public virtual bool HasPaymentMethod { get; set; }
		public bool HasGuest { get; set; }
		public bool HasRate { get; set; }
	}
}